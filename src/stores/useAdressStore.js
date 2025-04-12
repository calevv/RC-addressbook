import { create } from 'zustand';
const useAddressStore = create((set, get) => ({
    addressBook: [
        { id: 111, name: '김수민', address: '01012345678' },
        { id: 222, name: '성시원', address: '01098765432' },
    ],
    searchTerm: '',
    filteredAddressBook: [],
    addAddress: ({ name, address, memo }) =>
        set((state) => ({ addressBook: [...state.addressBook, { id: Date.now(), name, address, memo }] })),
    searchItem: (search) => {
        set({ searchTerm: search });
    },
    updateFilteredAddressBook: (term) => {
        set({ searchTerm: term });
        const lowerCaseTerm = term.toLowerCase();
        const filtered = get().addressBook.filter(
            (item) =>
                item.name.toLowerCase().includes(lowerCaseTerm) || item.address.toLowerCase().includes(lowerCaseTerm)
        );
        set({ filteredAddressBook: filtered });
    },
    deleteContact: (idToDelete) => {
        set((state) => ({
            addressBook: state.addressBook.filter((item) => String(item.id) !== String(idToDelete)),
            filteredAddressBook: state.filteredAddressBook.filter((item) => String(item.id) !== String(idToDelete)),
        }));
    },
    updateAddress: (updatedContact) => {
        set((state) => ({
            addressBook: state.addressBook.map((contact) =>
                String(contact.id) === String(updatedContact.id) ? updatedContact : contact
            ),
            filteredAddressBook: state.filteredAddressBook.map((contact) =>
                String(contact.id) === String(updatedContact.id) ? updatedContact : contact
            ),
        }));
    },
    resetSearch: () => {
        set({ searchTerm: '', filteredAddressBook: [] });
    },
}));

export default useAddressStore;

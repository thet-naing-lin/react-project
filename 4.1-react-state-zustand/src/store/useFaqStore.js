import { create } from "zustand";

const useFaqStore = create((set) => ({
  faq: [
    {
      id: 1,
      question: "Why use stored procedures in MySQL?",
      answer:
        "Stored procedures improve performance, security, and maintainability by centralizing logic on the server and reducing network traffic.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What is indexing in MySQL?",
      answer:
        "Indexing improves data retrieval speed by allowing the database to quickly locate the desired rows in a table.",
      isOpen: true,
    },
    {
      id: 3,
      question: "What is a primary key in MySQL?",
      answer:
        "A primary key uniquely identifies each record in a table and ensures that no duplicate values exist.",
      isOpen: false,
    },
  ],
  toggleQuestion: (faqId) => {
    set((state) => ({
      faq: state.faq.map((el) =>
        el.id === faqId
          ? { ...el, isOpen: !el.isOpen }
          : { ...el, isOpen: false }
      ),
    }));
  },
}));

export default useFaqStore;

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface RegistrationFormData {
  name: string;
  phone: string;
  email: string;
  targetExam: 'Group 1' | 'Group 2/2A' | 'Group 4' | 'All TNPSC';
  district: string;
}

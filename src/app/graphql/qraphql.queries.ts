import { gql } from 'apollo-angular';

const GET_FAQ = gql`
  query Faq($language: LanguageEnum!) {
    faq(language: $language) {
      id
      question
      answers
      language
      createdAt
      updatedAt
    }
  }
`;

const CREATE_FAQ = gql`
  mutation CreateFaq(
    $createFaqInput: CreateFaqInput!
    $language: LanguageEnum
  ) {
    createFaq(createFaqInput: $createFaqInput, language: $language) {
      id
      question
      answers
      language
      createdAt
      updatedAt
    }
  }
`;

const REMOVE_FAQ = gql`
  mutation RemoveFaq($removeFaqId: Int!) {
    removeFaq(id: $removeFaqId) {
      id
      question
      answers
      language
      createdAt
      updatedAt
    }
  }
`;

export { GET_FAQ, CREATE_FAQ, REMOVE_FAQ };

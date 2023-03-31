import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($title: String!) {
   saveBook(title: $title) {
    bookId
    authors
    desription
    title
    image
    string
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(bookId: ID!) {
    removeBook(thoughtId: $bookId) {
        bookId
        authors
        desription
        title
        image
        string
    }
  }
`;

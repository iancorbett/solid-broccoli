import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation CreateUser($username: String, $email: String, $password: String) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      email
      password
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
      username
    }
  }
}
`
export const DELETE_BOOK = gql`
mutation DeleteBook($bookId: String) {
  deleteBook(bookId: $bookId) {
    email
    password
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
    username
  }
}
`

export const LOGIN_USER = gql`
mutation Login($email: String, $password: String) {
  login(email: $email, password: $password) {
    token
  }
}
`

export const SAVE_BOOK = gql`
mutation SaveBook($authors: [String], $description: String, $bookId: String, $image: String, $link: String, $title: String) {
  saveBook(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
    email
    password
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
    username
  }
}
`
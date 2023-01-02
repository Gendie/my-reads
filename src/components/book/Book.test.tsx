import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Book from './Book';
import { Shelf } from '../../dtos';

describe('Book', () => {

    test('display title and author', () => {
        // Arrange
        render(<Book
            title='book title'
            authors={['author1', 'author2']}
            shelf='read'
            thumbnail='thumbnail'
            updateShelf={(shelf: Shelf) => { }}
        />);


        // Assert
        const title = screen.getByText('book title');
        const author = screen.getByText('author1, author2');
        expect(title).toBeInTheDocument();
        expect(author).toBeInTheDocument();
    });

    it('call updateShelf on selection change', () => {
        // Arrange
        const updateShelfSpy = jest.fn();
        render(<Book
            title='book title'
            authors={['author1', 'author2']}
            shelf='read'
            thumbnail='thumbnail'
            updateShelf={updateShelfSpy}
        />);

        // Act
        const select = screen.getByTestId('select');
        fireEvent.change(select, { target: { value: 'wantToRead' } })

        // Assert
        expect(updateShelfSpy).toHaveBeenCalledWith('wantToRead');
    });
});

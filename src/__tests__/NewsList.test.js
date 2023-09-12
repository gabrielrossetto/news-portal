import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NewsList from '../components/NewsList';

describe('NewsList Component', () => {
  it('renders the list of news articles correctly', () => {
    const mockArticles = [
      {
        title: 'Test News 1',
        description: 'Description for Test News 1',
        url: 'http://testnews1.com'
      },
      {
        title: 'Test News 2',
        description: 'Description for Test News 2',
        url: 'http://testnews2.com'
      }
    ];

    render(
      <MemoryRouter>
        <NewsList articles={mockArticles} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test News 1')).toBeInTheDocument();
    expect(screen.getByText('Description for Test News 1')).toBeInTheDocument();

    expect(screen.getByText('Test News 2')).toBeInTheDocument();
    expect(screen.getByText('Description for Test News 2')).toBeInTheDocument();
  });
});
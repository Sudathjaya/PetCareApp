// models.js

export const users = [
    {
      id: '1',
      name: 'Alice',
      avatar: 'https://example.com/alice-avatar.png',
      bio: 'Loves hiking and outdoor adventures.',
    },
    {
      id: '2',
      name: 'Bob',
      avatar: 'https://example.com/bob-avatar.png',
      bio: 'Avid reader and writer.',
    },
    // Add more users as needed
  ];
  
  export const posts = [
    {
      id: '101',
      userId: '1',
      content: 'Had a great time hiking today!',
      image: 'https://example.com/hiking.jpg', // optional
      media: null, // or video URL
      timestamp: '2024-04-26T10:00:00Z',
      likes: 10,
      comments: [
        {
          id: '1001',
          userId: '2',
          text: 'Awesome! Where did you go?',
          timestamp: '2024-04-26T10:05:00Z',
        },
        // More comments
      ],
    },
    // Add more posts as needed
  ];
  
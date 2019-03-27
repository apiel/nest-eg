```
{
  recipes {
    id
    title
    __typename
    type
  }
}
```

should return

```
{
  "data": {
    "recipes": [
      {
        "id": "d212ef92-c3e8-4001-86bb-9c87d5de13f7",
        "title": "Human",
        "__typename": "abc",
        "type": "abc"
      },
      {
        "id": "b652b5c2-9217-4736-a213-8f41302a5212",
        "title": "grey primary",
        "__typename": "abc",
        "type": "abc"
      },
      {
        "id": "7a526fbd-6619-41f5-8d65-ed0829fa03e6",
        "title": "Auto Loan Account South Carolina unleash",
        "__typename": "abc",
        "type": "abc"
      }
    ]
  }
}
```

but return

```
{
  "data": {
    "recipes": [
      {
        "id": "d212ef92-c3e8-4001-86bb-9c87d5de13f7",
        "title": "Human",
        "__typename": "Recipe",
        "type": "abc"
      },
      {
        "id": "b652b5c2-9217-4736-a213-8f41302a5212",
        "title": "grey primary",
        "__typename": "Recipe",
        "type": "abc"
      },
      {
        "id": "7a526fbd-6619-41f5-8d65-ed0829fa03e6",
        "title": "Auto Loan Account South Carolina unleash",
        "__typename": "Recipe",
        "type": "abc"
      }
    ]
  }
}
```
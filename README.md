# REST API

This is a simple REST API that has mock user data.

## Tech Stack

**Server:** Node, Express, MongoDB, Mongoose
**Deployment** Heroku

## Demo

Insert gif or link to demo

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Documentation

[Mongose](https://mongoosejs.com/docs/api.html)
[MongoDB](https://www.mongodb.com)
[Heroku](https://devcenter.heroku.com/categories/reference)

## Author

- Website - [Nova Gh.](https://novagh.com)
- Twitter - [@novaagh](https://www.twitter.com/@novaagh)

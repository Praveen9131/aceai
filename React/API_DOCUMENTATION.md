# Contact Form API Documentation

## API Endpoint
```
POST https://api.aceai.in/api/contact
```

## Request Headers
```
Content-Type: application/json
Accept: application/json
```

## Request Body (JSON)
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+91-9962264760",
  "company": "Example Company",
  "service": "web-development",
  "source": "google",
  "message": "I'm interested in your web development services.",
  "timestamp": "2025-01-23T10:30:00.000Z"
}
```

## Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Full name of the contact (min 3 characters) |
| `email` | string | Yes | Valid email address |
| `phone` | string | No | Phone number (format: +91-XXXXXXXXXX) |
| `company` | string | No | Company name |
| `service` | string | Yes | Service interested in. Options: `social-media`, `ai-solutions`, `training`, `web-development`, `campus-connect`, `other` |
| `source` | string | Yes | How they heard about us. Options: `google`, `social-media`, `referral`, `linkedin`, `other` |
| `message` | string | Yes | Message/Inquiry (min 10 characters) |
| `timestamp` | string | Auto | ISO 8601 timestamp of submission |

## Success Response (200 OK)
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "id": "12345",
    "submittedAt": "2025-01-23T10:30:00.000Z"
  }
}
```

## Error Response (400/500)
```json
{
  "success": false,
  "message": "Error message describing what went wrong",
  "errors": {
    "email": "Invalid email format",
    "name": "Name is required"
  }
}
```

## Example cURL Request
```bash
curl -X POST https://api.aceai.in/api/contact \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+91-9962264760",
    "company": "Example Company",
    "service": "web-development",
    "source": "google",
    "message": "I am interested in your web development services."
  }'
```

## Environment Variable
Set the API URL in your `.env` file:
```
REACT_APP_API_URL=https://api.aceai.in/api/contact
```

## Notes
- All required fields must be provided
- Email must be in valid format
- Phone is optional but recommended
- Service and Source must match one of the predefined options
- Message must be at least 10 characters long


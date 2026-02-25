---
name: camara-sdk 
description: How to use the camara SDK. For access to more information, try out the camara MCP server.
---
Based on my exploration of the CAMARA TypeScript SDK, I can now create a concise guide focused on the most common use cases.

```markdown
# CAMARA TypeScript SDK Guide

## Overview
The CAMARA SDK provides access to telco network APIs for device verification, location services, SIM management, KYC validation, and more. It uses bearer token authentication with automatic retries and supports TypeScript with full type definitions.

## Core Concepts
- **Client initialization**: Create a `Camara` instance with appropriate tokens
- **Resource namespaces**: APIs organized by function (e.g., `simswap`, `devicelocation`, `otpvalidation`)
- **Subscriptions**: Event-driven notifications for real-time updates
- **Error handling**: Built-in retry logic with typed error classes

## Common Use Cases

### 1. SIM Swap Detection
Check if a SIM card was recently swapped (fraud prevention):

```ts
import Camara from 'camara-sdk';
const client = new Camara();

// Check if SIM was swapped in last 120 hours
const result = await client.simswap.subscriptions.create({
  config: {
    subscriptionDetail: { phoneNumber: '+123456789' },
    subscriptionMaxEvents: 10,
    subscriptionExpireTime: '2025-12-31T23:59:59Z',
  },
  protocol: 'HTTP',
  sink: 'https://your-webhook.com/sim-swap',
  types: ['org.camaraproject.sim-swap-subscriptions.v0.swapped'],
});
```

### 2. Device Swap Verification
Verify if device was changed:

```ts
// Check if device swapped in last 120 hours
const swapCheck = await client.deviceswap.check({
  phoneNumber: '+123456789',
  maxAge: 120,
});

if (swapCheck.swapped) {
  console.log('Device was recently swapped!');
}

// Get exact timestamp of last swap
const swapDate = await client.deviceswap.retrieveDate({
  phoneNumber: '+123456789',
});
console.log('Last swap:', swapDate.latestDeviceChange);
```

### 3. OTP Validation
Send and validate one-time passwords:

```ts
// Send OTP code via SMS
const { authenticationId } = await client.otpvalidation.sendCode({
  phoneNumber: '+123456789',
  message: '{{code}} is your verification code',
});

// Validate the code
await client.otpvalidation.validateCode({
  authenticationId,
  code: 'AJY3',
});
```

### 4. KYC Customer Match
Verify customer identity data:

```ts
const matchResult = await client.knowyourcustomermatch.match({
  phoneNumber: '+123456789',
  givenName: 'John',
  familyName: 'Smith',
  birthdate: '1990-01-15',
  email: 'john@example.com',
});

// Check match results
if (matchResult.givenNameMatch === 'true') {
  console.log('Name verified!');
} else if (matchResult.givenNameMatch === 'false') {
  console.log('Score:', matchResult.givenNameMatchScore);
}
```

### 5. Device Location Subscriptions
Subscribe to location change events:

```ts
const subscription = await client.devicelocation.subscriptions.create({
  config: {
    subscriptionDetail: { 
      device: { phoneNumber: '+123456789' },
    },
    subscriptionExpireTime: '2025-12-31T23:59:59Z',
  },
  protocol: 'HTTP',
  sink: 'https://your-webhook.com/location',
  types: ['org.camaraproject.device-location.v0.area-entered'],
});

// List all subscriptions
const subs = await client.devicelocation.subscriptions.list();

// Delete subscription
await client.devicelocation.subscriptions.delete(subscription.subscriptionId);
```

## Advanced Features

### Access Raw Response
```ts
const { data, response } = await client.deviceswap.check({ maxAge: 120 }).withResponse();
console.log('Headers:', response.headers);
```

### Error Handling
```ts
try {
  await client.otpvalidation.validateCode({ authenticationId, code });
} catch (err) {
  if (err instanceof Camara.BadRequestError) {
    console.log('Invalid code');
  } else if (err instanceof Camara.RateLimitError) {
    console.log('Too many attempts');
  }
}
```

### Retry Configuration
```ts
const client = new Camara({ maxRetries: 5, timeout: 30000 });
```

## Response Patterns
- **Boolean checks**: Return `{ swapped: boolean }` or similar
- **Match results**: Return `'true' | 'false' | 'not_available'` with optional match scores
- **Subscriptions**: Return subscription objects with IDs for management
- **Timestamps**: ISO 8601 format strings (RFC 3339)
```
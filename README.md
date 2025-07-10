# BridgeLink | IT Solutions And Services Nextjs Template

#### Commit Prefixes

- `feat` – a new feature is introduced with the changes
- `fix` – a bug fix has occurred
- `chore` – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
- `refactor` – refactored code that neither fixes a bug nor adds a feature
- `style` – feature and updates related to style
- `docs` – updates to documentation such as a the README or other markdown files
- `format` – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
- `test` – including new or correcting previous tests
- `perf` – performance improvements
- `ci` – continuous integration related
- `build` – changes that affect the build system or external dependencies
- `revert` – reverts a previous commit

# Newsletter Section

## Key Features:

1. **Complete Database Setup**: Mongoose schema with proper validation, indexing, and TypeScript interfaces
2. **Secure Unsubscribe System**: 32-byte hex tokens for secure unsubscription
3. **Professional Email Templates**: HTML welcome emails with proper styling
4. **Error Handling**: Comprehensive error handling with proper HTTP status codes
5. **Email Compliance**: List-Unsubscribe headers and one-click unsubscribe support
6. **Performance Optimized**: Database connection caching and proper indexing

## API Endpoints:

- `POST /api/newsletter` - Subscribe users with duplicate protection
- `GET /api/unsubscribe` - Unsubscribe users with token validation

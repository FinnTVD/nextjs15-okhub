# Code Style và Conventions

## Naming Conventions

- **Biến/Hàm**: camelCase, tiếng Anh, có ý nghĩa rõ ràng
- **Components**: PascalCase (VD: `Section1`, `LoadingStep`)
- **Files**: kebab-case cho components, camelCase cho utilities
- **Constants**: UPPER_SNAKE_CASE (VD: `ROUTES`, `ENDPOINTS`)

## Code Organization

- **Import non-relative**: Sử dụng `@/` thay vì `../`
- **CSS**: Sử dụng BEM methodology
- **Comments**: Bằng tiếng Anh hoặc tiếng Việt, giải thích chức năng rõ ràng

## Best Practices được áp dụng

1. **Tránh lặp code**: Gom dữ liệu vào array/object và xử lý bằng vòng lặp
2. **Dynamic dispatch**: Thay vì gọi phương thức thủ công lặp lại
3. **Meaningful naming**: Tên biến/hàm tự giải thích, không cần comment
4. **Console.log**: Chỉ xóa khi được yêu cầu cụ thể
5. **State management**: Tránh dùng window để lưu state/callback

## Code Structure Patterns

- **Server Components**: Mặc định, chỉ dùng Client Components khi cần thiết
- **Error Handling**: Try-catch với meaningful error messages
- **Type Safety**: Sử dụng TypeScript interfaces và Zod schemas
- **API Integration**: Centralized ENDPOINTS trong `constants/ENDPOINTS.ts`

## Git Conventions

- **Commit messages**: Theo chuẩn semantic (feat, fix, docs, etc.)
- **Branch naming**: Feature branches với descriptive names
- **Code review**: Required trước khi merge

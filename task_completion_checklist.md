# Task Completion Checklist

## Trước khi hoàn thành task

1. **Code Quality**
   - [ ] Chạy `npm run lint` để kiểm tra lỗi ESLint
   - [ ] Kiểm tra TypeScript errors
   - [ ] Đảm bảo code tuân theo conventions đã định

2. **Testing**
   - [ ] Test functionality trong development mode
   - [ ] Kiểm tra responsive design
   - [ ] Test với cả 2 ngôn ngữ (vi/en)

3. **Build Verification**
   - [ ] Chạy `npm run build` để đảm bảo build thành công
   - [ ] Kiểm tra bundle size nếu cần: `ANALYZE=true npm run build`

4. **Code Review**
   - [ ] Kiểm tra naming conventions
   - [ ] Đảm bảo không có console.log không cần thiết
   - [ ] Verify import paths sử dụng `@/`
   - [ ] Kiểm tra error handling

5. **Documentation**
   - [ ] Cập nhật comments nếu cần
   - [ ] Đảm bảo code self-documenting
   - [ ] Update README nếu có thay đổi lớn

## Git Workflow

1. **Before Commit**
   - [ ] `git status` để xem changes
   - [ ] `git add .` để stage changes
   - [ ] Review staged changes với `git diff --cached`

2. **Commit Message**
   - [ ] Sử dụng conventional commits
   - [ ] Message rõ ràng, mô tả thay đổi
   - [ ] Ví dụ: `feat: add user authentication`, `fix: resolve responsive issue`

3. **After Commit**
   - [ ] `git push origin main` để push changes
   - [ ] Verify trên remote repository

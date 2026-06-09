# Nền tảng Quản lý Chi tiêu Cá nhân
(Personal Expense Manager)

Ứng dụng Backend xây dựng trên nền tảng NestJS, TypeScript và MySQL nhằm hỗ trợ người dùng quản lý thu nhập, chi tiêu và theo dõi tình hình tài chính cá nhân theo thời gian thực.

---

# 1. Thực trạng & Ý tưởng dự án

Hiện nay nhiều người vẫn quản lý các khoản thu chi bằng sổ tay hoặc ghi chú trên điện thoại. Việc này dễ dẫn đến:

- Quên ghi lại các khoản chi tiêu.
- Khó kiểm soát số tiền đã sử dụng.
- Không biết khoản nào chiếm tỷ trọng lớn.
- Khó lập kế hoạch tài chính trong tương lai.

**Giải pháp:**

Hệ thống cung cấp các API CRUD tập trung, kết nối trực tiếp tới Cơ sở dữ liệu MySQL.

Điểm cốt lõi của dự án là tự động thống kê các khoản thu chi, phân loại theo từng danh mục và tính toán số dư hiện tại, giúp người dùng kiểm soát tài chính cá nhân hiệu quả hơn.

---

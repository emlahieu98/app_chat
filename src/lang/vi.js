export const transValidation = {
  email_incorrect: "Email phải có dạng exampe@gmail.com",
  gender_incorrect: "Sai giới tính rồi má ơi",
  password_incorrect: "Mật khẩu chứa ít nhất 6 kí tự  ",
  password_confirmation_incorrect: "Nhập lại mật khẩu chính xác nào"        
};
export const transErrors = {
  account_in_use: " Email này đã được sử dụng ",
  account_removed: "Tài khoản đã bị gỡ khỏi hệ thống ",
  account_not_active: " Email này đã được đăng kí nhưng chưa được active tài khoản , vui lòng kiểm tra lại email của bạn"
};
export const transSuccess = {
  userCreated: (userEmail) => {
    return `Tài khoản ${userEmail} đã được tạo , vui lòng kiểm tra Email của bạn để active tài khoản `;
  }
};
export const transMail = {
  subject: "APP_CHAT: Xác nhận kích hoạt tài khoản ",
  template: (linkVerify) => {
    return `
     <h2> Chào mừng bạn gia nhập ngôi nhà APP_CHAT</h2>
     <h3> Vui lòng nhấp vào link bên dưới để xác nhận tài khoản </h3>
     <h3> <a href="${linkVerify}" target="blank">${linkVerify} </a></h3>   
    `;
  },
  send_failed: "Có lỗi trong quá trình gửi Email , vui lòng liên hệ lại bộ phận hỗ trợ của chúng tôi "
};

export const getQRCodeIdFromURL = (url) => {
  const urlParams = new URLSearchParams(new URL(url).search);
  return urlParams.get("qr_code_id");
};

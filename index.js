let publicKey="c09c448cc211f73160f9d6fbc6cd835e"
let privateKey="53d8345e699a51fbeb6d69cf6a69644b4e7a8fa9"
let time="1"
let hash = CryptoJS.MD5(time+privateKey+publicKey).toString();


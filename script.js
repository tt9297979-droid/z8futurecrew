const canvas = document.getElementById("signature");
const signaturePad = new SignaturePad(canvas);

function clearSignature(){
signaturePad.clear();
}

document.getElementById("loanForm").addEventListener("submit",function(e){

e.preventDefault();

const name = document.getElementById("name").value
const idcard = document.getElementById("idcard").value
const address = document.getElementById("address").value
const amount = document.getElementById("amount").value
const phone = document.getElementById("phone").value

const { jsPDF } = window.jspdf
const doc = new jsPDF()

doc.setFontSize(18)
doc.text("สัญญาเงินกู้",80,20)

doc.setFontSize(12)

doc.text("ผู้ให้กู้: นายพีระพัฒน์ ทองระมุน",20,40)
doc.text("เลขบัตรประชาชน: 1103704092018",20,50)
doc.text("ที่อยู่: 117 หมู่8 ต.ขุนหาญ อ.ขุนหาญ จ.ศรีสะเกษ 33150",20,60)
doc.text("เบอร์: 0934714311",20,70)

doc.text("ชื่อผู้กู้: "+name,20,90)
doc.text("เลขบัตร: "+idcard,20,100)
doc.text("ที่อยู่: "+address,20,110)
doc.text("จำนวนเงินกู้: "+amount+" บาท",20,120)
doc.text("เบอร์โทร: "+phone,20,130)

if(!signaturePad.isEmpty()){
const img = signaturePad.toDataURL("image/png")
doc.addImage(img,"PNG",140,110,50,20)
}

doc.save("loan_contract.pdf")

sendLine(name,amount,phone)

})

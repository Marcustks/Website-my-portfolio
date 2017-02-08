var hoje = new Date();
var agora = hoje.getHours();
var saudacao;
if (agora > 18) {
   saudacao = 'ood night!';
} else if (agora > 12) {
   saudacao = 'good afternoon!';
} else if (agora > 0) {
  saudacao = 'Good morning!';
} else {
  saudacao = 'Wellcome!';
}
document.write('<h2>' + saudacao + '</h2>');

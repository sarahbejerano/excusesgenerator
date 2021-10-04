/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net", ".es"];

window.onload = function domainGenerator(pronoun, adj, noun, domain) {
  const pronounIndex = Math.floor(Math.random() * pronoun.length);
  const adjIndex = Math.floor(Math.random() * adj.length);
  const nounIndex = Math.floor(Math.random() * noun.length);
  const domainIndex = Math.floor(Math.random() * domain.length);
  return (
    pronoun[pronounIndex] +
    adj[adjIndex] +
    noun[nounIndex] +
    domain[domainIndex]
  );
};

function displayDomain() {
  var finaldomain = domainGenerator();
  document.getElementById(finaldomain).innerHTML = "";
}

console.log(displayDomain);

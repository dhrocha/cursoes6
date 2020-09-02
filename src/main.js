/*const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

async function executaPromise() {
  const response = await minhaPromise();

  console.log(response);
}

executaPromise();


import axios from "axios";

class Api {
  static async getUserInfo(username) {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    console.log(response);
  }
}

Api.getUserInfo("diego3g");

*/

import api from "./api";
import { link } from "fs";

class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById("repo-form");
    this.inputEl = document.querySelector("input[name=repository]");
    this.listEl = document.getElementById("repo-list");
    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputEl.value;

    if (repoInput.length === 0) {
      return;
    }

    try {
      const response = await api.get(`/repos/${repoInput}`);

      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });

      this.render();
    } catch (err) {
      alert("erro");
    }
  }

  render() {
    this.listEl.innerHTML = "";

    this.repositories.forEach(repo => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.appendChild(document.createTextNode("Acessar"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

new App();

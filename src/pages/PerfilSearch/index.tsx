import './styles.css';

import { useState } from 'react';
import axios from 'axios';

type FormData = {
  perfil: string;
};

type Information = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const PerfilSearch = () => {
  const [information, setInformation] = useState<Information>();

  const [formData, setFormData] = useState<FormData>({
    perfil: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`http://api.github.com/users/${formData.perfil}`)
      .then((response) => {
        setInformation(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setInformation(undefined);
        console.log(error);
      });
  };

  return (
    <div className="main-container">
      <div className="container search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="perfil"
              value={formData.perfil}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {information && (
        <div className="container information-container">
          <div className="information-card">
            <div className="card-img">
              <img src={information.avatar_url} alt="" />
            </div>
            <div className="card-txt">
              <h1>Informações</h1>
              <div className="card-perfil">
                <div>
                  <p className="result-title">Perfil:</p>
                </div>
                <div>
                  <p className="result-description-perfil">{information.url}</p>
                </div>
              </div>
              <div className="card-perfil">
                <div>
                  <p className="result-title">Seguidores:</p>
                </div>
                <div>
                  <p className="result-description">{information.followers}</p>
                </div>
              </div>
              <div className="card-perfil">
                <div>
                  <p className="result-title">Localidade:</p>
                </div>
                <div>
                  <p className="result-description">{information.location}</p>
                </div>
              </div>
              <div className="card-perfil">
                <div>
                  <p className="result-title">Nome:</p>
                </div>
                <div>
                  <p className="result-description">{information.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfilSearch;

/*

{
  "login": "acenelio",
  "id": 13897257,
  "node_id": "MDQ6VXNlcjEzODk3MjU3",
  "avatar_url": "https://avatars.githubusercontent.com/u/13897257?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/acenelio",
  "html_url": "https://github.com/acenelio",
  "followers_url": "https://api.github.com/users/acenelio/followers",
  "following_url": "https://api.github.com/users/acenelio/following{/other_user}",
  "gists_url": "https://api.github.com/users/acenelio/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/acenelio/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/acenelio/subscriptions",
  "organizations_url": "https://api.github.com/users/acenelio/orgs",
  "repos_url": "https://api.github.com/users/acenelio/repos",
  "events_url": "https://api.github.com/users/acenelio/events{/privacy}",
  "received_events_url": "https://api.github.com/users/acenelio/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Nelio Alves",
  "company": "@devsuperior ",
  "blog": "https://devsuperior.com.br",
  "location": "Brazil",
  "email": null,
  "hireable": null,
  "bio": "Ajudo estudantes e profissionais de programação a ingressar ou se recolocar na carreira.\r\n20 anos de experiência profissional, mais de 160 mil alunos online. ",
  "twitter_username": null,
  "public_repos": 280,
  "public_gists": 0,
  "followers": 8041,
  "following": 1,
  "created_at": "2015-08-21T03:24:45Z",
  "updated_at": "2022-10-23T12:34:18Z"
}
*/

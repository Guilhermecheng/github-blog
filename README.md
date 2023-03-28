# github-blog
My first personal blog!

<div style="display:flex">
  <img height="420" alt="homepage sreenshot" src="https://user-images.githubusercontent.com/62719629/228383432-7c6adc9b-24a9-4ac8-b8aa-c27fcf9007d7.png">
  <img height="420" alt="blog page screenshot" src="https://user-images.githubusercontent.com/62719629/228383373-019ef0c5-35a1-4b58-9681-f3ec1d393902.png">
</div>


A blog based in Github's API.<br/>
All blog posts are just issues from this repository.

### Github API
Github API is used to get user info and and issues.

```javascript
// User data
  const response = await axios.get(`https://api.github.com/users/${username}`)
```


```javascript
// Issues list
  const response = await axios.get(`https://api.github.com/search/issues?q=${query}repo:${username}/${repo}`)
```

```javascript
// Issue
  const response = await axios.get(`https://api.github.com/repos/${username}/${repo}/issues/${slug}`)
```

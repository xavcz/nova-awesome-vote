# xavcz:nova-awesome-post
![screenshot](http://res.cloudinary.com/xavcz/image/upload/v1472724090/Capture_d_e%CC%81cran_2016-09-01_12.00.33_sm1fkm.png)

Awesome vote on [Telescope Nova](https://github.com/TelescopeJS/Telescope)! 🖖

👁 + 👍 + 👎

### How to install

**Automatic:** Add it via `meteor add xavcz:nova-awesome-vote`.

**Manual:** Clone the repo in `/packages` folder and write `xavcz:nova-awesome-vote` at the end of `.meteor/packages`. This package depends on `nova:base-components`, so be sure to add it after this package (load order).

### How to use

In your custom package, extends `PostsItem` component and replace the `posts-item-vote` div by :

```jsx
<div className="posts-item-vote posts-item-awesome-vote">
  <Telescope.components.AwesomeVote post={post} type="base"/>
  <div className="vote-actions-block">
    <Telescope.components.AwesomeVote post={post} type="upvote"/>
    <Telescope.components.AwesomeVote post={post} type="downvote"/>
  </div>
</div>
```

Awesome! 

### Styling
That would be really cool to have CSS animations & transitions, and even SVG support! If you feel able to do this kind of stuff, feel free to do a PR. That would be much appreciated! 😁 

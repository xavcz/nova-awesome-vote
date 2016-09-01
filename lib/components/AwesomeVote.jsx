import React from 'react';
import classNames from 'classnames';
import Telescope from 'meteor/nova:lib';
import Users from 'meteor/nova:users';

class AwesomeVote extends Telescope.components.Vote {
  constructor() {
    super();
    this.downvote = this.downvote.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  downvote(e) {
    e.preventDefault();

    const post = this.props.post;
    const user = this.context.currentUser;

    if(!user){
      this.context.messages.flash("Please log in first");
    } else if (user.hasDownvoted(post)) {
      this.context.actions.call('posts.cancelDownvote', post._id, () => {
        this.context.events.track("post downvote cancelled", {'_id': post._id});
      });        
    } else {
      this.context.actions.call('posts.downvote', post._id, () => {
        this.context.events.track("post downvoted", {'_id': post._id});
      });
    }

  }

  handleAction(e) {
    e.preventDefault();

    return this.props.type ==='base' ? null : this.props.type === 'upvote' ? this.upvote(e) : this.downvote(e);
  }

  render() {

    const { post, type } = this.props;
    const user = this.context.currentUser;

    const isBase = type === 'base';
    const hasVoted = type === 'base' && (Users.hasUpvoted(user, post) || Users.hasDownvoted(user, post));
    const hasUpvoted = type === 'upvote' && Users.hasUpvoted(user, post);
    const hasDownvoted = type === 'downvote' && Users.hasDownvoted(user, post);
    const actionsClass = classNames(
      "upvote-button",
      "vote",
      {basescore: isBase}, 
      {voted: hasVoted},
      {upvoted: hasUpvoted},
      {downvoted: hasDownvoted}
    );

    /*
      if type is base -> show base count
      else if type is upvote -> show upvote icon + upvote action
      else if type is downvote -> show downvote icon + downvote action
    */
    return (
      <a className={actionsClass} onClick={this.handleAction}>
        { type === 'base' ? <div className="vote-count">{post.baseScore || 0}</div> : null }
        <div className="sr-only">{type}</div>
        <Telescope.components.Icon name={type} />
      </a>
    )
  }
};

export default AwesomeVote;
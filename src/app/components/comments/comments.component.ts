import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {CommentService, IComment} from '../../common/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  form: FormGroup;

  comments = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const {title} = this.form.value;

    const comment: IComment = {
      title,
      author_key: 'OL26320A'
    }

    this.commentService.create(comment).subscribe((comment) => {
      console.log(comment);
      this.comments.push({...comment});
      this.form.reset();
    }, error => console.error(error));
  }

  onDelete(comment: IComment) {
    this.commentService.remove(comment).subscribe(() => {
      this.comments = this.comments.filter(item => item.id !== comment.id);
    }, error => console.error(error));
  }
}


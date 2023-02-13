import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { GET_FAQ, CREATE_FAQ, REMOVE_FAQ } from '../graphql/qraphql.queries';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faqs: any[] = [];
  error: any;

  faqForm = new FormGroup({
    language: new FormControl('Select Language', Validators.required),
    question: new FormControl('', Validators.required),
    answers: new FormArray([new FormControl()]),
  });

  addAnswers() {
    (<FormArray>this.faqForm.get('answers')).push(new FormControl());
  }
  createFaq() {
    console.log('this.faqForm.value', this.faqForm.value);
    console.log('this.faqForm.value.question', this.faqForm.value.question);
    console.log('this.faqForm.value.answers', this.faqForm.value.answers);
    console.log('this.faqForm.value.language', this.faqForm.value.language);

    this.apollo
      .mutate({
        mutation: CREATE_FAQ,
        variables: {
          createFaqInput: {
            question: this.faqForm.value.question,
            answers: this.faqForm.value.answers,
          },
          language: this.faqForm.value.language,
        },
        refetchQueries: [
          {
            query: GET_FAQ,
          },
        ],
      })
      .subscribe(
        ({ data }: any) => {
          this.faqs = data.faq;
          this.faqForm.reset();
        },
        (error) => {
          this.error = error;
        }
      );
  }

  removeFaq(id: number) {
    this.apollo
      .mutate({
        mutation: REMOVE_FAQ,
        variables: {
          removeFaqId: id,
        },
        refetchQueries: [
          {
            query: GET_FAQ,
          },
        ],
      })
      .subscribe(
        ({ data }: any) => {
          this.faqs = data.removeFaq;
        },
        (error) => {
          this.error = error;
        }
      );
  }

  constructor(private apollo: Apollo) {}
  get selectedLanguage() {
    return this.faqForm.get('language');
  }
  get question() {
    return this.faqForm.get('question');
  }
  get answers() {
    return this.faqForm.get('answers') as FormArray;
  }

  changeSelectedLanguage(e: any) {
    this.selectedLanguage?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  getEnglishFaq() {
    this.apollo
      .watchQuery({
        query: GET_FAQ,
        variables: {
          language: 'ENGLISH',
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.faqs = data.faq;
        this.error = error;
      });
  }
  getArabicFaq() {
    this.apollo
      .watchQuery({
        query: GET_FAQ,
        variables: {
          language: 'ARABIC',
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.faqs = data.faq;
        this.error = error;
      });
  }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_FAQ,
        variables: {
          language: 'ARABIC',
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.faqs = data.faq;
        this.error = error;
      });
    // this.apollo
    //   .watchQuery({
    //     query: gql`
    //       query GetCountryByLanguage {
    //         getCountryByLanguage {
    //           id
    //           name
    //           language
    //           createdAt
    //           updatedAt
    //         }
    //       }
    //     `,
    //   })
    //   .valueChanges.subscribe(({ data, error }: any) => {
    //     this.faqs = data.getCountryByLanguage;
    //     console.log(this.faqs);
    //     this.error = error;
    //   });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Apollo } from 'apollo-angular';
// import { ADD_TODO, DELETE_TODO, GET_TODOS } from '../graphql/graphql.queries';

// @Component({
//   selector: 'app-todos',
//   templateUrl: './todos.component.html',
//   styleUrls: ['./todos.component.css']
// })
// export class TodosComponent implements OnInit {
//   todos: any[] = [];
//   error: any;

//   todoForm = new FormGroup({
//     name: new FormControl('', Validators.required),
//     description: new FormControl('', Validators.required)
//   });

//   addTodo() {
//     // apollo graphql query to add todo
//     this.apollo.mutate({
//       mutation: ADD_TODO,
//       variables: {
//         name: this.todoForm.value.name,
//         description: this.todoForm.value.description,
//       },
//       refetchQueries: [{
//         query: GET_TODOS
//       }]
//     }).subscribe(({data}: any) => {
//       this.todos = data.addTodo;
//       this.todoForm.reset();
//     }
//     , (error) => {
//       this.error = error;
//     }
//     );

//   }

//   deleteTodo(id: string) {
//     // apollo graphql query to delete todo
//     this.apollo.mutate({
//       mutation: DELETE_TODO,
//       variables: {
//         id: id,
//       },
//       refetchQueries: [{
//         query: GET_TODOS
//       }]
//     }).subscribe(({data}: any) => {
//       this.todos = data.deleteTodo;
//     }
//     , (error) => {
//       this.error = error;
//     }
//     );
//   }

//   constructor(private apollo: Apollo) { }

//   ngOnInit(): void {
//     this.apollo.watchQuery({
//       query: GET_TODOS
//     }).valueChanges.subscribe(({ data, error }: any) => {
//       this.todos = data.todos;
//       this.error = error;
//   }
//   );
//   }
// }

// import { NoteText } from './note-text.jsx'
// import { NoteImg } from './note-img.jsx'
// import { NoteTodos } from './note-todos.jsx'
// import { NoteService } from '../services/note-service.js'
// export class NotePreview extends React.Component {
//     state = {
//         style: {
//             backgroundColor: null,
//         }

//     }

//     componentDidMount() {
//         const { style } = this.props.note
//         this.setState({ style: style })
//     }

//     handleChange = ({ target }) => {
//         const field = target.name
//         const value = target.value
//         // this.setState((prevState) => ({ style: { ...prevState.style, [field]: value } }))
//         this.setState((prevState) => ({ style: { backgroundColor: value } }))

//     }


//     render() {
//         if (!note) return <React.Fragment></React.Fragment>
//         const DynamicCmp = () => {
//             switch (note.type) {
//                 case 'note-txt':
//                     return <NoteText key={note.id} note={note} />
//                 case 'note-img':
//                     return <NoteImg key={note.id} note={note} />
//                 case 'note-todos':
//                     return <NoteTodos key={note.id} note={note} />
//             }
//         }

//         return <DynamicCmp />


//     }
// }

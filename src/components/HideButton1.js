// function HideButton1() {
//
//     state = { show: false }
//
//     toggleMenu = () => {
//         this.setState({ show: !this.state.show })
//     }
//
//     render() {
//         const { show } = this.state
//         return(
//             <div>
//                 <button onClick={this.toggleMenu}>MENU</button>
//                 {
//                     show
//                         ? <ul>
//                             <li>qwe</li>
//                             <li>asd</li>
//                             <li>zxc</li>
//                         </ul>
//                         : undefined
//                 }
//             </div>
//         )
//     }
// }
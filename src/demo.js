import { store, openFloat, closeFloat, removeFloat } from './index'
const PopupOne = props => {
  return (
    <div>
      测试弹窗组件<br/>
      <span onClick={props.close}>组件内部关闭</span><br/>
      <span onClick={props.remove}>组件内部移除</span>
    </div>
  )
}

const popupList = {
  popupOne: PopupOne
}

const Store = new store(popupList)

const openPopup = openFloat(Store)
const closePopup = closeFloat(Store)
const removePopup = removeFloat(Store)

const Appone = props => {
  let option = {
    name: 'popupOne',
    props: {data: 'test data'},
    floatType: 'panel'
  }
  return (
    <div>
      <h2>预先定义组件创建弹窗</h2>
      <p>根据预先定义好的组件进行操作</p>
      <input type="button" value="打开弹窗1" onClick={() => openPopup(option)}/>
      <input type="button" value="关闭弹窗1" onClick={() => closePopup('popupOne')}/>
      <input type="button" value="移除弹窗1" onClick={() => removePopup('popupOne')}/>
    </div>
  )
}

ReactDOM.render(<Appone/>, document.getElementById('appone'))

const Apptwo = props => {
  return (
    <div>
      <h2>不预先定义组件创建弹窗</h2>
      <p>全局都可以自由操作弹窗，调用时传入组件</p>
      <input type="button" value="打开弹窗1" onClick={() => openFloat()({name: 'testComponent', component: PopupOne})}/>
      <input type="button" value="关闭弹窗1" onClick={() => closeFloat()('testComponent')}/>
      <input type="button" value="移除弹窗1" onClick={() => removeFloat()('testComponent')}/>
    </div>
  )
}

ReactDOM.render(<Apptwo/>, document.getElementById('apptwo'))

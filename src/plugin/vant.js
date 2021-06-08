import { Form, Field, Cell, Button, RadioGroup, Radio, Area, Popup, Overlay, Picker, Toast, Icon } from 'vant'

export default app => {
  app.use(Form),
  app.use(Field),
  app.use(Cell),
  app.use(Button),
  app.use(RadioGroup),
  app.use(Radio),
  app.use(Area),
  app.use(Popup),
  app.use(Overlay),
  app.use(Picker),
  app.use(Toast),
  app.use(Icon)
}
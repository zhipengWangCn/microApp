import { Form, Button, Row } from 'antd'

class configurePage extends React.Component {
    constructor (props) {
      super(props)
    }
  
    render () {
        return(
        <div>
        <Button  type='primary'>
            按钮
        </Button>
        <Button  type='primary'>
            按钮
        </Button>
        <Button  type='primary' danger>
            按钮
        </Button>
       </div>
       )
    }
  }
  
  export default configurePage

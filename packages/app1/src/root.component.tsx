import { Row, Col, Divider } from 'antd';
import NormalForm from './components/form'
import SchemeForm from './components/schema-form'

export default function Root(props) {
  return (<Row gutter={[24, 16]}>
    <Col span={12}>
      <Divider orientation="left">普通表单</Divider>
      <NormalForm />
    </Col>
    <Col span={12}>
      <Divider orientation="left">JSON动态表单</Divider>
      <SchemeForm />
    </Col>
  </Row>)
}

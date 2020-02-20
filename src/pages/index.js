import Head from 'next/head'
import TerraformStateSchema from '../services/terraform-state-schema'

const Home = () => (
  <div className="container">
    {new TerraformStateSchema().Version()}
  </div>
)

export default Home

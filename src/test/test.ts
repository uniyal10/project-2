import chai from 'chai'
import server from "../app" 
import chaiHttp from 'chai-http'
chai.should()

let expect = chai.expect



chai.use(chaiHttp)

describe('User API',()=>{


  //for get user api
  describe('GET /users',()=>{
    it('it should get all users',(done)=>{
      chai.request(server)
          .get('/users')
          .end((err:Error,response)=>{
            response.should.have.status(200)
            response.body.should.be.a('array')
            response.body.length.should.be.eq(4)
            done();
          })
    })

    it('it should not get all users',(done)=>{
      chai.request(server)
          .get('/user')
          .end((err:Error,response)=>{
            response.should.have.status(404)
            done();
          })
    })
  })


  describe('UPDATE user by their id',()=>{
    it('it should update user',(done)=>{
      chai.request(server)
          .post('/users/1')
          .end((err:Error,response)=>{
            response.should.have.status(200)
            response.body.should.be.a('object')
            response.body.should.have.property('message').eq('updated')
            response.body.should.have.property('updatedTodo')
            response.body.updatedTodo.should.contain({id:'1'})

            // response.body.should.have.property('id')
            // response.body.should.have.property('firstName')
            // response.body.should.have.property('middleName')
            // response.body.should.have.property('lastName')
            // response.body.should.have.property('email')
            // response.body.should.have.property('phoneNumber')
            // response.body.should.have.property('role')
            // response.body.should.have.property('address')
            // response.body.should.have.property('id').eq(1)

            done();
          })
    })
  })
  describe('DELETE user by their id',()=>{
    it('it should DELETE an specific  user',(done)=>{
      chai.request(server)
          .delete('/users/1')
          .end((err:Error,response)=>{
            response.should.have.status(200)
            response.body.should.be.a('object')
            response.body.should.have.property('message').eq('user deleted')
            response.body.should.have.property('deletedUser')
            response.body.deletedUser.should.contain({id:'1'})

            // response.body.should.have.property('id')
            // response.body.should.have.property('firstName')
            // response.body.should.have.property('middleName')
            // response.body.should.have.property('lastName')
            // response.body.should.have.property('email')
            // response.body.should.have.property('phoneNumber')
            // response.body.should.have.property('role')
            // response.body.should.have.property('address')
            // response.body.should.have.property('id').eq(1)

            done();
          })
    })
  })
})
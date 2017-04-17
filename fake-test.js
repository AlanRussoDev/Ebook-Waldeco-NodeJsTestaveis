const Database = {
    findAll() {}
}

class UsersController {
    constructor(Database){
        this.Database = Database
    }


    getAll (){
        return this.Database.findAll('users')
    }

}


Describe('UserController getAll()', () => {
    it('should return a list of users', () => {
        const expectedDatabaseResponse = [{
            id : 1,
            name : 'John Doe',
            email : 'John@mail.com'
        }]

        const fakeDatabase = {
            findAll(){
                return expectedDatabaseResponse
            }
        }

        const usersController = UsersController(fakeDatabase)
        const response = UsersController.getAll()

        expect(response).to.be.eql(expectedDatabaseResponse)
    })
})


describe('UsersController getAll()', () => {
    it('should database findAll with correct parameters', () => {
        const findAll = sinon.spy(Database, 'findAll');
      
        const usersController = new UsersController(Database);
        usersController.getAll();
      
        sinon.assert.calledWith(findAll, 'users');
        findAll.restore();
    })
})
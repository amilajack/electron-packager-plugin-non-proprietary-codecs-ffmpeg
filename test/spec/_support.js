import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiFS from 'chai-fs';

chai.use(chaiAsPromised);
chai.use(chaiFS);
chai.should();

process.env.TESTING = true;

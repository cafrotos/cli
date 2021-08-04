import path from 'path';
import _ from 'lodash';
import helpers from './index';
import getYArgs from '../core/yargs';

const _args = getYArgs().argv;

module.exports = {
  getInterfacesFile() {
    if (_args.interfaces) {
      return path.resolve(process.cwd(), _args.interfaces);
    }

    return path.resolve(process.cwd(), 'interfaces', 'IModels.ts');
  },

  getRelativePath() {
    if (_args.interfaces) {
      return path
        .join(_args.interfaces)
        .replace(process.cwd(), '')
        .replace('.ts', '');
    }

    return path.join('interfaces', 'IModels');
  },

  generateFileContent(args) {
    return helpers.template.render('interfaces/IModels.ts', {
      name: _.capitalize(args.name),
      attributes: helpers.model.transformAttributes(args.attributes),
      underscored: args.underscored,
    });
  },

  appendInterfaces(args) {
    const interfacesPathfile = this.getInterfacesFile();
    const interfacesPath = path.dirname(interfacesPathfile);

    if (!helpers.path.existsSync(interfacesPath)) {
      helpers.asset.mkdirp(interfacesPath);
    }

    if (!helpers.path.existsSync(interfacesPathfile)) {
      helpers.asset.write(
        interfacesPathfile,
        `import { Optional } from 'sequelize/types'`
      );
    }

    helpers.asset.append(interfacesPathfile, this.generateFileContent(args));
  },
};

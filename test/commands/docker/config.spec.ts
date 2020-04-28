import { getName, mocked } from '../../utils';
import * as _utils from '../../../src/util';
import { run } from '../../../src/commands/docker/config';

jest.mock('renovate/dist/workers/global/cache');
jest.mock('renovate/dist/datasource');
jest.mock('../../../src/util');
jest.mock('../../../src/utils/docker');

const utils = mocked(_utils);

describe(getName(__filename), () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('works', async () => {
    utils.resolveFile.mockResolvedValue('./bin/file.sh');
    await run();
    expect(utils.exec.mock.calls).toMatchSnapshot();
  });
});
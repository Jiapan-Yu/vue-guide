import { AlertService } from './app/alert.service'
import { ComponentService } from './app/component.service'
import { run } from './app/utils/app'

const alertService = new AlertService()
const componentService = new ComponentService()

run(alertService, componentService)
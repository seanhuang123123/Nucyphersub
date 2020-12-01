import { Upgraded } from '../generated/Dispatcher/Dispatcher'
import { Dispatcher } from '../generated/schema'

export function handleNewUpgraded(event: Upgraded): void {
  let dispatcher = new Dispatcher(event.params.from.toHex())
  dispatcher.to = event.params.to
  dispatcher.owner = event.params.owner
  dispatcher.save()
}  

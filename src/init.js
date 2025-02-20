/**
 * @copyright Copyright (c) 2020 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Marco Ambrosini <marcoambrosini@pm.me>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

// The purpose of this file is to wrap the logic shared by the different talk
// entry points

import store from './store'

if (!window.OCA.Talk) {
	window.OCA.Talk = {}
}

/**
 * Frontend message API for adding actions to talk messages.
 * @param {*} Object the wrapping object.
 * @param {String} label the action label.
 * @param {Function} callback the callback function. This function will receive
 * the messageAPIData object as a parameter and be triggered by a click on the
 * action.
 * @param {String} icon the action label. E.g. "icon-reply"
 */
window.OCA.Talk.registerMessageAction = ({ label, callback, icon }) => {
	const messageAction = {
		label,
		callback,
		icon,
	}
	store.dispatch('addMessageAction', messageAction)
}

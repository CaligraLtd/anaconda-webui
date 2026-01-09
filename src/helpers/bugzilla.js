/*
 * Copyright (C) 2025 Red Hat, Inc.
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with This program; If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Create a Bugzilla URL for entering a bug report
 * @param {String} baseURL - The base URL for the bug report (e.g. from /etc/os-release BUG_REPORT_URL)
 * @param {Object} osReleaseData - { product, version }
 * @returns {String} - The URL for entering a bug report
 */
export const createBugzillaEnterBug = (baseURL, osReleaseData) => {
    const queryData = {
        ...osReleaseData,
    };
    const reportURL = new URL(baseURL);

    Object.keys(queryData).map(query => reportURL.searchParams.append(query, queryData[query]));

    return reportURL.href;
};

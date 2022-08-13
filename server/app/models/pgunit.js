const db = require('../../config/db.config').connect()

class Units {
  /**
   * Create new Unit with name
   *
   * @param {name}
   * @returns {newUnit}
   */

  static async createNewUnit(name) {
    const queryResult = await db.query(
      `INSERT INTO units (name)
             VALUES ($1)
             RETURNING unit_id, name`,
      [name],
    )

    const newUnit = queryResult.rows[0]
    if (!newUnit)
      throw new BadRequestError('There Was An Error Creating New Unit', 400)
    return newUnit
  }

  /**
   * GETS ALL UNITS OF THE SITE
   *
   * @returns {units} [{unit_id,name},etc.]
   */

  static async readAllUnits() {
    const queryResult = await db.query(
      `SELECT unit_id, name
         FROM units`,
    )
    const units = queryResult.rows
    return units
  }

  /**
   * Updates a unit with name
   *
   * @param {int} unitId
   * @returns {updated}
   */

  static async updateUnit(unitId, name) {
    const queryResult = await db.query(
      `UPDATE units
         SET name = $1
         WHERE unit_id = $2
         RETURNING unit_id, name`,
      [name, unitId],
    )
    const updated = queryResult.rows[0]
    if (!updated)
      throw new NotFoundError('There was an error finding specified unit')
    return updated
  }

  /**
   * Delete unit by unit id
   *
   * Params: {unitId}
   *
   */
  static async deleteUnit(unitId) {
    const queryResult = await db.query(
      `DELETE
         FROM units
         WHERE unit_id = $1
         RETURNING id`,
      [unitId],
    )
    const removedUnit = queryResult.rows[0]
    if (!removedUnit)
      throw new NotFoundError(`No user Found with unit id ${unitId} }`)
  }
}

module.exports = Units
class dashboardPage{
    selectorList(){
        const selectors = {
            fistNameField: "[name='firstName']",
            midNameField:"[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField:".oxd-input--active",
            dateField:"[placeholder='yyyy-dd-mm']",
            calendarFieldButton:':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
            dateCloseButton:".--close",
            submitButton:"[type='submit']",
            nationalitiesBarButton:':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
            nationalityButton: ":nth-child(167)",
            MaritialStatsButton: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
            statsRelationShipSelector:".oxd-select-dropdown > :nth-child(3)",
            dateBirthField: "nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
            genderRadioBoxButton: ":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input",
            savedButton: ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button",
        }
        return selectors
    }
    
}
export default dashboardPage
Vue.use(VeeValidate);
var fullName = {
    messages: {
        en: function (field, args, data) {
            // Returns a message.
            return (data && data.message) || 'Something went wrong';
        },
        ar: function (field, args) {
            // Returns an Arabic message.
        }
    },
    validate: function (value) {
        if (value.length > 0) {
            return true;
        } else {
            return {
                valid: false,
                data: {
                    message:'Full Name is required'
                }
            };
        }
    }
}
VeeValidate.Validator.extend('fullName', fullName);
    var ScaleLoader = VueSpinner.ScaleLoader;
    var app = new Vue({
        el: '#app',
    components: {
        ScaleLoader: ScaleLoader
    },
        data: {
            submitButtonText:'@Umbraco.GetDictionaryValue("Submit")',
            submittingButtonText: '@Umbraco.GetDictionaryValue("SubmittingWithThreeDots")',
            newsletter: { parentId: $('#newsletter-parent').val() },
            processing:false,
            showSuccessMessage: false,
            showFailureMessage:false
        },
        methods: {
            onSubmitClick: function () {
                this.$validator.validateAll().then(function (result) {
                    if (result) {
                        app.processing = true;
                        app.$http.post('/umbraco/surface/Newsletter/Newsletter/', app.newsletter).then(function (response) {
                            if (response.body.IsSuccess) {
                                app.showSuccessMessage = true;
                                app.showFailureMessage = false;
                                app.newsletter={ parentId: $('#newsletter-parent').val() };
                            } else {
                                app.showSuccessMessage = false;
                                app.showFailureMessage = true;
                            }
                            app.processing = false;
                        }, function (errorResponse) {
                            app.processing = false;
                        });

                    }
                });
            }
        }
    });
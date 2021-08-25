
const { GraphQLError }= require ('graphql');

exports =class NajeebError{
     DisallowMetadataQueries(context) {
        return {
          Field(node) {
            const fieldName = node.name.value;
            // const fieldName ='nnnnnnnnn';

       if(1==1){
        context.reportError(
                new GraphQLError(
                  `Validation: Requesting the field ${fieldName} is not allowed`,
                ),
              );
       }
            // if (fieldName === 'metadata') {
            //   context.reportError(
            //     new GraphQLError(
            //       `Validation: Requesting the field ${fieldName} is not allowed`,
            //     ),
            //   );
            // }
          },
        };
      }
}
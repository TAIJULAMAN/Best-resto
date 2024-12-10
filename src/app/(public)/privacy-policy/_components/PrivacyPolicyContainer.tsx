const PrivacyPolicyContainer = () => {
  return (
    <div>
      <div className="space-y-10">
        <h1 className="xl:text-6xl md:text-3xl text-xl font-bold md:mb-10 mb-5 ">
          Privacy Policy
        </h1>
        <p className="text-primary-slate max-w-7xl">
          Welcome to [Your Company Name]. Before using our logo design service,
          please carefully review the following Terms and Conditions, as they
          govern the contractual relationship between you (the "Client") and
          [Your Company Name] (the "Service Provider"). By using our logo design
          service, you acknowledge that you have read, understood, and agreed to
          these Terms and Conditions in their entirety.
        </p>

        <h1 className="xl:text-6xl md:text-3xl text-xl font-bold md:mb-10 mb-5">
          → Scope of Service
        </h1>
        <div>
          <p className="text-primary-slate max-w-7xl mb-5">
            a. [Your Company Name] will provide custom logo design services to
            the Client based on the specifications provided by the Client.
          </p>
          <p className="text-primary-slate max-w-7xl">
            b. The Service Provider will deliver the final logo design in the
            agreed-upon format upon completion and full payment of the service
            fee.
          </p>
        </div>

        <h1 className="xl:text-6xl md:text-3xl text-xl font-bold md:mb-10 mb-5">
          → Copyright and Ownership
        </h1>
        <div>
          <p className="text-primary-slate max-w-7xl mb-5">
            a. The Client acknowledges that all rights, title, and ownership of
            the final logo design will belong solely to the Client after full
            payment has been received by the Service Provider.
          </p>
          <p className="text-primary-slate max-w-7xl mb-5">
            b. Final payment ensures that only the agreed design becomes the
            client’s property. Any previous ideas/concepts remain the property
            of The Service Provider, unless any prior agreement has been made.
          </p>
          <p className="text-primary-slate max-w-7xl">
            c. The Service Provider reserves the right to showcase the completed
            logo design in their portfolio or promotional materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyContainer;

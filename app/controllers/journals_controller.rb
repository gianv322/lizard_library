class JournalsController < ApplicationController
    def index
        journals = Journal.all
        render json: journals, status: :ok
    end
    def create
        journal = Journal.create!(journal_params)
        render json: journal, status: :created
    end

    private
    def journal_params
        params.permit(:title, :message, :date, :reptile_id)
    end
end
